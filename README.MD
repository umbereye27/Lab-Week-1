
## How to Run the Code

1. Clone the repository:

   git clone https://github.com/umbereye27/Lab-Week-1.git
   cd Lab-Week-1.git

# Reflection & Discussion


## What are the benefits of pure functions in real-world codebases?

Pure functions are easier to test and debug because their output is determined solely by their input.

They reduce bugs by avoiding side effects.

They are reusable and easier to compose into more complex functions.

## How does immutability help prevent bugs?
It prevents accidental data changes.

It ensures data consistency, especially in asynchronous or collaborative environments.

Immutable data structures make undo/redo, versioning, and state tracking simpler.

## Compare compose() vs pipe() — which do you prefer and why?
compose(f, g) applies right-to-left: f(g(x))

pipe(f, g) applies left-to-right: g(f(x))

Preference: pipe() is often more readable because it mirrors how we think about data flowing step-by-step.

## Which functions were hardest to keep pure?
1.Functions dealing with tracking state (like deleteNth) required extra care to stay pure while using internal counters.

2.Ensuring no mutation during sqlJoin or object merging required the use of spread syntax.

3. compose function and pipe function



   
