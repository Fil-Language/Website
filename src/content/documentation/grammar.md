# Grammar

Here is the grammar in BNF :

```bnf
program ::= module import* ("export"? expr)*

module ::= "module" module_name
module_name ::= module_identifier ("." module_identifier)*
module_identifier ::= (digit | letter)+

import ::= "import" module_name

expr ::= literal
       | variable_declaration
       | assignation
       | identifier
       | calcul
       | function
       | lambdas
       | control
       | function_call
       | cast

literal ::= boolean | number | character | string | fstring
boolean ::= "true" | "false"
number ::= integer | float
integer ::= digit+
digit ::= [0-9]
float ::= integer? "." integer
character ::= "'" "\"? char "'"
char ::= digit | letter | " " | special
letter ::= upper_case | lower_case
upper_case ::= [A-Z]
lower_case ::= [a-z]
special ::= '? all others characters ?'
string ::= '"' char* '"'
fstring ::= "f" string

variable_declaration ::= ("val" | "var") identifier ((":" type) | (":" type)? assignation)
assignation ::= "=" expr
identifier ::= lower_case (digit | letter)*
type ::= (identifier ('[' integer ']' | '*')*)
       | lambda_type

calcul ::= unary_calcul | binary_calcul
unary_calcul ::= identifier post_operator
               | pre_operator identifier
post_operator ::= "++" | "--" | ("[" expr "]")
pre_operator ::= "++" | "--" | "&" | "*" | "!"
binary_calcul ::= expr binary_operator expr
binary_operator ::= "&&" | "||" | "<" | ">" | "==" | "<=" | ">=" | "!=" | "<<" | ">>" | "+" | "-" | "/" | "*" | "%"

function ::= function_declaration function_body
function_declaration ::= "fun" identifier "(" function_params? ")" function_type?
function_params ::= identifier ':' type ( ',' identifier ':' type )*
function_type ::= ":" type
function_body ::= assignation
                | parenthesis_body
                | block_body
parenthesis_body ::= "(" expr ")"
block_body ::= "{" expr* "}"

lambda ::= "(" function_params? ")" function_type? "->" (expr | parenthesis_body | block_body)
lambda_type ::= "(" (type ("," type)*)? ")" "->" type

control ::= condition | loop
condition ::= if | switch
if ::= "if" if_condition if_body ("else" (if | if_body))?
if_condition ::= "(" expr ")"
if_body ::= expr | block_body
switch ::= "switch" if_condition switch_body
switch_body ::= "{" switch_case "}"
switch_case ::= switch_pattern "->" (expr | parenthesis_body | block_body)
switch_pattern ::= "default" | literal
loop ::= for_i | for_iter | while
for_i ::= "for" for_i_condition if_body
for_i_condition ::= "(" variable_declaration? ";" expr? ";" expr? ")"
for_iter ::= "for" for_iter_condition if_body
for_iter_condition ::= "(" ("val" | "var") identifier ":" identifier ")"
while ::= "while" if_condition if_body

function_call ::= identifier "(" function_call_params? ")"
function_call_params ::= expr ("," expr)*

cast ::= "(" type ")" expr
```

You can find this grammar as a graph [here](https://github.com/Fil-Language/Documentation/blob/master/grammar/grammar.xhtml)