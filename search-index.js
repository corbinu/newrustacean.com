var searchIndex = {};
searchIndex["show_notes"] = {"doc":"Show notes","items":[[0,"e000","show_notes","Hello, world!",null,null],[5,"hello_world","show_notes::e000","Prints \"Hello, world!\" if you import it somewhere and run it.",null,{"inputs":[],"output":null}],[0,"e001","show_notes","Document all the things!",null,null],[3,"TVShow","show_notes::e001","This is a sample structure, to demonstrate `rustdoc`/`cargo doc`.",null,null],[12,"theme","","Here is a string telling us what the theme song was.",0,null],[12,"year","","Here is the year the show premiered.",0,null],[5,"use_members","","This documents a plain-old function.",null,{"inputs":[],"output":null}],[11,"new","","This documents a fairly ho-hum structure constructor.",0,{"inputs":[{"name":"str"},{"name":"i32"},{"name":"str"}],"output":{"name":"tvshow"}}],[0,"e002","show_notes","Something borrowed, something... moved?",null,null],[3,"Circle","show_notes::e002","This struct is simple but useful to see how borrowing and moving work.",null,null],[12,"x","","X position of the circle's origin.",1,null],[12,"y","","Y position of the circle's origin",1,null],[12,"r","","Radius of the circle",1,null],[5,"demonstrate_ownership","","Demonstrates how borrowing works with plain old functions.",null,{"inputs":[],"output":null}],[5,"borrow","","Demonstrates general borrowing of an immutable reference.",null,{"inputs":[{"name":"circle"}],"output":null}],[5,"borrow_mut","","Demonstrates general borrowing of a mutable reference.",null,{"inputs":[{"name":"circle"}],"output":null}],[5,"move_circle","","Demonstrates general moving of an instance.",null,{"inputs":[{"name":"circle"}],"output":null}],[5,"demonstrate_method_ownership","","Demonstrates how the same concepts apply when dealing with methods.",null,{"inputs":[],"output":null}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a `Circle` instance centered on specified x, y values.",1,{"inputs":[{"name":"f64"},{"name":"f64"},{"name":"f64"}],"output":{"name":"circle"}}],[11,"x_by_ref","","Returns the value of `Circle.x`, borrowing an immutable reference to the circle to do it.",1,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[11,"x_by_mut_ref","","Returns the value of `Circle.x`, borrowing a mutable reference to the circle and changing the value (demonstrating a situation in which you would want to use a mutable rather than immutable reference).",1,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[11,"by_take","","Returns the value of `Circle.x`, taking ownership of the circle. As a result of the change in ownership, the circle goes out of scope after the method returns, so the circle instance will be inaccessible after that.",1,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[11,"by_take_mut","","Returns the value of `Circle.x`, taking ownership of a mutable circle.",1,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[0,"e003","show_notes","No. more. nulls.",null,null],[3,"PreexistingStruct","show_notes::e003","Just exists to be used as an element in `RelatedishThings`.",null,null],[12,"some_int","","",2,null],[12,"some_string","","",2,null],[4,"RelatedishThings","","An enumeration can *hold* a variety of types. This one shows you a few.",null,null],[13,"Unit","","This doesn't have a value other than being RelatedishThings::Unit.",3,null],[13,"SomeName","","It could be a tuple struct, with basically any value type embedded.",3,null],[13,"SomeValue","","",3,null],[13,"ComplexData","","It can be a full-on struct-type construct.",3,null],[12,"description","show_notes::e003::RelatedishThings","",3,null],[12,"number","","",3,null],[13,"ReusedStructure","show_notes::e003","And it can use other complex data types within those, of course.",3,null],[5,"demonstrate_basic_enumeration","","Shows how the result of an enum comes back as increasingly complex data.",null,{"inputs":[],"output":null}],[5,"demonstrate_match","","Shows in a bit more detail how `match` works.",null,{"inputs":[],"output":null}],[5,"get_an_option","","Shows how this is used in a more meaningful context, with a standard type.",null,{"inputs":[{"name":"bool"}],"output":{"name":"option"}}],[5,"demonstrate_option","","Shows how an option type works in practice.",null,{"inputs":[],"output":null}],[5,"get_a_result","","Shows how to return either a meaningful result or an error as an enum.",null,{"inputs":[{"name":"bool"}],"output":{"name":"result"}}],[5,"demonstrate_result","","Shows how a `Result` type works in practice.",null,{"inputs":[],"output":null}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"e004","show_notes","Functionalized",null,null],[5,"demonstrate_methods","show_notes::e004","Shows how to use both struct and instance methods.",null,{"inputs":[],"output":null}],[5,"apply_function_to_i64","","Shows how to take a function as an argument.",null,{"inputs":[{"name":"f"},{"name":"i64"}],"output":{"name":"i64"}}],[5,"demonstrate_function_arguments","","Show how to call a function with a function as an argument.",null,{"inputs":[],"output":null}],[5,"demonstrate_closure_environment","","Shows how closures can act on elements within their environment.",null,{"inputs":[],"output":null}],[0,"e005","show_notes","Allocate it where?",null,null],[5,"doubler_factory","show_notes::e005","Creates a function which doubles an integer.",null,{"inputs":[],"output":{"name":"box"}}],[5,"doubler_closure_factory","","Creates a closure which doubles an integer.",null,{"inputs":[],"output":{"name":"box"}}],[5,"demonstrate_function_returns","","Uses the `doubler_factory` to get a function which doubles a number.",null,{"inputs":[],"output":null}],[0,"e006","show_notes","Modularize this!",null,null],[5,"use_modules_internal","show_notes::e006","Demonstrates the use of modules and namespaces.",null,{"inputs":[],"output":null}],[5,"demonstrate_use_inside_function","","Demonstrates that modules can be `use`d within functions.",null,{"inputs":[],"output":null}],[0,"public_internal_module","","This is an internal module which *is* public.",null,null],[5,"a_public_module_fn","show_notes::e006::public_internal_module","A public function in a public module.",null,{"inputs":[],"output":null}],[0,"demonstrate_namespacing","show_notes::e006","",null,null],[5,"demonstrate_globbed_calls","show_notes::e006::demonstrate_namespacing","Demonstrates how glob-imported `use`s works.",null,{"inputs":[],"output":null}],[5,"demonstrate_aliased_calls","","Demonstrates how aliased namespaces work.",null,{"inputs":[],"output":null}],[0,"demonstrate_nesting","show_notes::e006","Give an example of nested modules.",null,null],[5,"now_public_fn","show_notes::e006::demonstrate_nesting","A module function, demonstrating module-public function status.",null,{"inputs":[],"output":null}],[0,"a_nested_module","","This is just a nested module.",null,null],[0,"e007","show_notes","Testify",null,null],[5,"add","show_notes::e007","A trivial function for a trivial test. See the source!",null,{"inputs":[{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[0,"e008","show_notes","Just like something else",null,null],[3,"SimpleType","show_notes::e008","A simple type to illustrate trait implementation.",null,null],[3,"GenericContainer","","This is just a container which can hold any two types.",null,null],[12,"t","","",4,null],[12,"u","","",4,null],[4,"Maybe","","This is `Option<T>`, but using Haskell's names instead.",null,null],[13,"Nothing","","",5,null],[13,"Just","","",5,null],[5,"a_generic","","Demonstrate a function *generic* over any type.",null,{"inputs":[{"name":"t"}],"output":null}],[5,"a_generic_printable","","Demonstrate a function with a *trait bound on a generic*.",null,{"inputs":[{"name":"t"}],"output":null}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"e009","show_notes","Composing a Rustic tune",null,null],[3,"DoubleAndOne","show_notes::e009","Define a simple struct on which to implement `Iterator`... and more!",null,null],[12,"value","","A value to double and add one to on every `next()` call.",7,null],[5,"demonstrate_for","","Demonstrate using a for loop over an (infinite!) iterator.",null,{"inputs":[],"output":null}],[8,"ASimpleTrait","","Define a simple trait so we can see how it works.",null,null],[10,"get_some_integer","","Have the item return an integer.",8,{"inputs":[{"name":"self"}],"output":{"name":"i64"}}],[11,"a_default_print","","Have the item print and then return some string.",8,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"doubleandone"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"doubleandone"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"self"},{"name":"doubleandone"}],"output":{"name":"bool"}}],[11,"default","","Start with 0.",7,{"inputs":[],"output":{"name":"doubleandone"}}],[11,"get_some_integer","","",7,{"inputs":[{"name":"self"}],"output":{"name":"i64"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"add","","",7,{"inputs":[{"name":"self"},{"name":"doubleandone"}],"output":{"name":"doubleandone"}}],[0,"e010","show_notes","Macros rule!",null,null],[5,"demonstrate_try","show_notes::e010","Demonstrate how `try!` works in practice.",null,{"inputs":[{"name":"tryresult"}],"output":{"name":"tryresult"}}],[6,"TryResult","","Trivial alias for Result for convenience.",null,null],[0,"e011","show_notes","Once upon a type",null,null],[3,"TypeSystem","show_notes::e011","Look, we composed those enums into another type. How... droll.",null,null],[4,"Expressive","","Is the thing \"expressive\", whatever that means?",null,null],[13,"Ridiculously","","",9,null],[13,"PrettyDarn","","",9,null],[13,"Fairly","","",9,null],[13,"SortOf","","",9,null],[13,"Barely","","",9,null],[13,"NotEvenALittle","","",9,null],[4,"Strong","","Is the thing *strong*?",null,null],[13,"Indeed","","",10,null],[13,"ABit","","",10,null],[13,"NotEspecially","","",10,null],[13,"NopeNopeNope","","",10,null],[4,"StaticallyKnown","","Is the thing statically known?",null,null],[13,"Yeah","","",11,null],[13,"Nope","","",11,null],[5,"describe_type_systems","","An incredibly contrived function which just shows enums at work.",null,{"inputs":[],"output":null}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"builder","","",12,{"inputs":[{"name":"str"},{"name":"expressive"},{"name":"strong"},{"name":"staticallyknown"}],"output":{"name":"typesystem"}}],[0,"e012","show_notes","I'm not familiar with that expression",null,null],[5,"functions_are_expressions","show_notes::e012","Functions are expressions, and so are their contents.",null,{"inputs":[],"output":{"name":"i32"}}],[5,"if_blocks_are_expressions","","Like functions, if blocks are expressions.",null,{"inputs":[],"output":{"name":"f64"}}],[5,"match_blocks_are_expressions","","Match blocks are also expressions.",null,{"inputs":[],"output":{"name":"string"}}],[5,"ordinary_blocks_are_expressions","","Block blocks are also expressions!",null,{"inputs":[],"output":{"name":"i32"}}],[0,"e013","show_notes","Staying alive",null,null],[3,"Individual","show_notes::e013","An individual person defined in a way that includes a *reference* type.",null,null],[12,"name","","The person's name, as a string *reference*.",13,null],[12,"age","","Just in case we're talking about a character from Genesis",13,null],[4,"NumericReference","","A reference to a number, either integral or floating-point. Goofy, yes.",null,null],[13,"IntRef","","",14,null],[13,"FloatRef","","",14,null],[5,"refs_all_around","","Get a(n optional) sub-slice of a slice.",null,null],[0,"e014","show_notes","Stringing things along",null,null],[5,"get_a_slice","show_notes::e014","Get a string *slice*. Note the required lifetime specifier on the type!",null,{"inputs":[],"output":{"name":"str"}}],[5,"get_a_string","","Get a `String` instance. Note there's no lifetime.",null,{"inputs":[],"output":{"name":"string"}}],[5,"show_from_behavior","","It's easy enough to get a `String` from a `str`.",null,{"inputs":[],"output":{"name":"string"}}],[5,"demonstrate_unicode","","Print a 🚀, just because we can.",null,{"inputs":[],"output":null}],[5,"get_back_some_unicode","","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"get_a_string_with_capacity","","Get a `String` with a specified capacity.",null,{"inputs":[{"name":"usize"}],"output":{"name":"string"}}],[0,"demo_deref","","Demonstrate dereferencing. (You'll want to read this example carefully.)",null,null],[3,"Origin","show_notes::e014::demo_deref","A no-content struct to serve as the type to dereference from.",null,null],[3,"DerefTarget","","A no-content struct to serve as the target to dereference to.",null,null],[11,"deref","","",15,{"inputs":[{"name":"self"}],"output":{"name":"dereftarget"}}],[0,"e015","show_notes","Not dumb pointers.",null,null],[3,"FileData","show_notes::e015","A trivial (and frankly rather silly) example for use with `Rc`.",null,null],[3,"ASendableType","","",null,null],[5,"print_rc_count","","Note that this function is *generic*: it will work for any type.",null,{"inputs":[{"name":"rc"}],"output":null}],[5,"demonstrate_rc","","Demonstrate the basics of reference-counted types. (Read the source, Luke!)",null,{"inputs":[],"output":null}],[5,"get_empty_weak","","Note that this takes ownership of the data.",null,{"inputs":[{"name":"rc"}],"output":{"name":"weak"}}],[5,"get_wrapped_file_data","","",null,{"inputs":[],"output":{"name":"rc"}}],[11,"new","","",16,{"inputs":[{"name":"str"}],"output":{"name":"filedata"}}],[0,"e016","show_notes","`RefCell`s and code smells",null,null],[3,"SimpleContainer","show_notes::e016","A container showing a type where `Cell<T>` works with `Vec<T>`.",null,null],[3,"SimpleNonCopyable","","A container showing where `Cell<T>` doesn't work and `RefCell<T>` does.",null,null],[5,"demonstrate_need_for_cell","","Demonstrate how you need `Cell<T>` even just with a `Vec<T>`;",null,{"inputs":[],"output":{"name":"vec"}}],[5,"double_cell","","Operate mutably on the contenets of an immutable reference to a `Vec`.",null,null],[5,"add_to_each_string","","Demonstrate interior mutability with `Rc` and `RefCell`.",null,null],[11,"clone","","",17,{"inputs":[{"name":"self"}],"output":{"name":"simplecontainer"}}],[0,"e017","show_notes","Point me where I need to go",null,null],[3,"DataStore","show_notes::e017","A dummy container for use with references.",null,null],[12,"contents","","",18,null],[5,"demonstrate_ref","","Give a basic example of how the reference operator works.",null,{"inputs":[],"output":null}],[5,"demonstrate_deref","","A simple example of using the dereference operator.",null,{"inputs":[],"output":null}],[5,"demonstrate_match","","A simple demonstration of matching against a reference type.",null,{"inputs":[],"output":null}],[11,"new","","",18,{"inputs":[{"name":"i32"}],"output":{"name":"datastore"}}],[0,"e018","show_notes","`Borrow`, `AsRef`, `Deref`: my head hurts now",null,null],[3,"NoImplsAtAll","show_notes::e018","A struct for showing that you cannot use `Borrow`, `AsRef`",null,null],[3,"HasAllTheImpls","","Demonstrate borrowing the internal contents of the item.",null,null],[5,"takes_a_borrowable","","Take it implementing `Borrow<[u8]>`.",null,{"inputs":[{"name":"b"}],"output":{"name":"result"}}],[5,"takes_a_reference","","Take it implementing `AsRef<[u8]>`. Note similarity to `takes_a_borrowable`.",null,{"inputs":[{"name":"a"}],"output":{"name":"result"}}],[5,"coerces_via_deref","","Take the same type by `Deref` coercion at the call site.",null,null],[11,"new","","",19,null],[11,"new","","",20,null],[11,"borrow","","",20,null],[11,"as_ref","","",20,null],[11,"deref","","",20,null],[0,"bonus","show_notes","Bonus episodes: shorter, and usually more about community or philosophy.",null,null],[0,"_1","show_notes::bonus","Polyglot programming promises and perils",null,null],[0,"_2","","Legacy code",null,null],[0,"_3","","Building as a community",null,null],[0,"_4","","We *can* have nice things",null,null],[0,"_5","","Better than open source contributions",null,null],[0,"_6","","It doesn't have to be sexy",null,null],[0,"_7","","Katas---or: learning by doing",null,null],[0,"crates_you_should_know","show_notes","Brief discussions of important and useful crates around the Rust ecosystem.",null,null],[0,"_1","show_notes::crates_you_should_know","quick-xml",null,null],[0,"interview","show_notes","Interviews: hearing from people around the Rust community!",null,null],[0,"_1","show_notes::interview","Sean Griffin",null,null],[0,"part_1","show_notes::interview::_1","Sean Griffin on Rust, ORMs, and Web Frameworks",null,null],[0,"part_2","","Sean Griffin on type systems and hopes for Rust's future",null,null],[0,"_2","show_notes::interview","Raph Levien",null,null],[0,"part_1","show_notes::interview::_2","Raph Levien on using Rust to build the Xi editor",null,null],[0,"part_2","","Raph Levien on Rust's current strengths and places it can improve",null,null],[0,"_3","show_notes::interview","Carol (Nichols || Goulding)",null,null],[0,"meta","show_notes","Meta episodes: content about the show itself.",null,null],[0,"_1","show_notes::meta","Slowing Down",null,null],[0,"news","show_notes","News: occasional episodes dedicated to changes in Rust and its ecosystem.",null,null],[0,"_1","show_notes::news","One year and counting",null,null],[0,"_2","","Let's talk roadmap!",null,null],[14,"main_try","show_notes","Define a macro like `try!` but which works in the context of `main()`.",null,null],[14,"print_ident_name","","Define an ident macro to show how they can capture different *syntax*.",null,null]],"paths":[[3,"TVShow"],[3,"Circle"],[3,"PreexistingStruct"],[4,"RelatedishThings"],[3,"GenericContainer"],[4,"Maybe"],[3,"SimpleType"],[3,"DoubleAndOne"],[8,"ASimpleTrait"],[4,"Expressive"],[4,"Strong"],[4,"StaticallyKnown"],[3,"TypeSystem"],[3,"Individual"],[4,"NumericReference"],[3,"Origin"],[3,"FileData"],[3,"SimpleContainer"],[3,"DataStore"],[3,"NoImplsAtAll"],[3,"HasAllTheImpls"]]};
initSearch(searchIndex);
