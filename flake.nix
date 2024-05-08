{
  description = "uwu.co.nz dev-shell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };
  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
      };
      nodePkg = pkgs.nodejs_22;
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodePkg
          (yarn.override { nodejs = nodePkg; })
        ];
      };
    };
}
