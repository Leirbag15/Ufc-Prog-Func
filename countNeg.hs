countNeg []=0
countNeg (x:xs)=if x<0 then 1+countNeg xs else countNeg xs
