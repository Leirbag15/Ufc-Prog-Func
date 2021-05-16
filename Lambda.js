const I=a=>a //Identity
const M=f=>f(f) //Mockingbird
const T=a=>_=>a //True
const F=_=>b=>b //False
const FLIP=f=>a=>b=>f(b)(a) //Cardinal
const NOT=a=>a(F)(T) //Not
const AND=a=>b=>a(b)(F) //And
const OR=a=>b=>a(T)(b) //Or
