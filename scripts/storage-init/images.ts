import { storage } from '../firebase-config';
import serviceAccount from '../../serviceAccount.json';
import doc from '../../docs/default-firebase-data.json';
const fs = require('fs');

doc["gallery"] = [] as any;

export const importImages = async () => {
  // Get all directory names in images folder
  const directories = fs.readdirSync('../../images', { withFileTypes: true })
    .filter((dirent: { isDirectory: () => boolean; }) => dirent.isDirectory())
    .map((dirent: { name: string; }) => dirent.name);

  // Walk all directories gotten above and upload each file within
  for (var i = 0; i < directories.length; i++) {
    // Add trailing '/' if dirName isn't blank
    const dirNameFormatted = (directories[i] != "" ? directories[i] + '/' : directories[i]);
    
    // Get all files under dirName
    const files = await getFilesInDirectory(dirNameFormatted);

    // Walk all the files in the directory, upload them and add the link to the JSON config
    for (var x = 0; x < files.length; x++) {
      await uploadFile(files[x].name, dirNameFormatted);
      await addImageLinkToJSON(files[x].name, directories[i]);
      if (Object.is(directories.length - 1, i) && Object.is(files.length - 1, x)) {
        fs.writeFile('../../docs/default-firebase-data.json', JSON.stringify(doc, null, 4), null, function() {
          console.log("docs/default-firebase-data.json writen to with new image links");
        });
      }
    }
  }
};

async function getFilesInDirectory(dirName: string) {
  // Walk through all files in directory
  return fs.readdirSync('../../images/' + dirName, { withFileTypes: true })
    .filter((file: { isFile: () => boolean; }) => file.isFile())
    .map((file: { name:string }) => file);
}

async function uploadFile(fileName: string, dirName: string) {
  // Upload the file
  const uri = '../../images/' + dirName + fileName;
  await storage.bucket().upload(uri, { destination: 'images/' + dirName + fileName });
  await storage.bucket().file('images/' + dirName + fileName).makePublic();
}

async function addImageLinkToJSON(fileName: string, dirName: string) {
  const url = 'https://firebasestorage.googleapis.com/v0/b/' + serviceAccount.project_id + '.appspot.com/o/images%2F' + dirName + '%2F' + fileName + '?alt=media';
  switch (dirName) {
    case 'team':
      doc["team"][0]!["members"].forEach(async (society: any, index: number) => {
        if (society.photo.includes(fileName)) {
          doc["team"][0]!["members"]![index]!.photoUrl = url;
        }
      });
      break;
    
    case 'gallery':
      doc["gallery"].push(url);
      break;
  }
}
