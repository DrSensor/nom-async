initSidebarItems({"fn":[["all_consuming","succeeds if all the input has been consumed by its child parser"],["complete","transforms Incomplete into Error"],["cond","calls the parser if the condition is met"],["cut","transforms an error to failure"],["flat_map","creates a new parser from the output of the first parser, then apply that parser over the rest of the input"],["iterator","creates an iterator from input data and a parser"],["map","maps a function on the result of a parser"],["map_opt","applies a function returning an Option over the result of a parser"],["map_parser","applies a parser over the result of another one"],["map_res","applies a function returning a Result over the result of a parser"],["not","succeeds if the child parser returns an error"],["opt","optional parser: will return None if not successful"],["peek","tries to apply its parser without consuming the input"],["recognize","if the child parser was successful, return the consumed input as produced value"],["rest","Return the remaining input"],["rest_len","Return the length of the remaining input"],["value","returns the provided value if the child parser succeeds"],["verify","returns the result of the child parser if it satisfies a verification function"]],"struct":[["ParserIterator","main structure associated to the [iterator] function"]]});