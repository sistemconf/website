{
  description = "SISTEM website";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  nixConfig.bash-prompt-suffix = "[SISTEM Dev] ";

  outputs = { self, nixpkgs, utils, ... }: utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ ];
      };

      # set the node version here
      nodejs = pkgs.pkgs.nodejs_24;
    in rec {
      devShell = pkgs.mkShell {
        name = "SISTEM env";
        nativeBuildInputs = [
          nodejs
        ];
#        shellHook = ''export EDITOR="${pkgs.nano}/bin/nano --nonewlines"'';
      };

    });
}