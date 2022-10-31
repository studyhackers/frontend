module.exports = function muBablePlugin() {
    return {
      visitor: {
        VariableDeclaration(path) {
          console.log("VariableDeclaration() kind:", path.node.kind) // const
          
          // contst => bar 변환
          if (path.node.kind === "const") {
            path.node.kind = "var"
          }
        },
      },
    };
  }