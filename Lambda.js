const I=a=>a //Identity
I(I)
const M=f=>f(f) //Mockingbird
M(I)
const T=a=>_=>a //True
T(T)(F)
const F=_=>b=>b //False
F(T)(F)
const FLIP=f=>a=>b=>f(b)(a) //Cardinal
FLIP(T)(F)(T)
const NOT=a=>a(F)(T) //Not
NOT(F)(T)(F)
const AND=a=>b=>a(b)(F) //And
AND(T)(T)
const OR=a=>b=>a(T)(b) //Or
OR(F)(F)
// Assisti os dois vídeos que o senhor passou e criei os códigos de acordo com o vídeo eu achei melhor pra aprender cada assunto
