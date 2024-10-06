import Lexer from "./Lexer";
import Parser from "./Parser";

const fs = require('fs')

const code = fs.readFileSync('code.science').toString()

const lexer = new Lexer(code);

lexer.lexAnalysis()

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode()

parser.run(rootNode);
