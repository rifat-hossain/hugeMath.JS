# hugeMath.JS
## Introduction
Every **Data Types** has a limited [value range](https://docs.microsoft.com/en-us/cpp/cpp/data-type-ranges) (e.g. value range of int32 is -2,147,483,648 to 2,147,483,647). Mathmetical operations like addition, subtraction, multification or divition occurs among these numerical data types and operation result has to be bound within the limit.

Ortherwise, an overload exception error will be thrown or the data will be lost or exact data won't be shown.

The main concept of this library is to do mathmetical operations even with bigger values (bigger than 32 bit or 64 bit or any other values) as the user wants. By using `strings` as input and output there's no bound of data value limits.


## Algorithms
### Addition
Function named `add(string left_operand, string right_operand): string` does the additional operation. I can assume you know what operands are. Suppose you want the result of **1234 + 567** , then the `left_operand` should be "1234" and the `right_operand` should be "567".
### Subtraction
Function named `subt(string left_operand, string right_operand): string` does the subtractional operation.
### Multiplication
There are two algorithms of the multiplication operation. They are `mult_long(string left_operand, string right_operand): string` and `mult_lattice(string left_operand, string right_operand): string`.

### mult_long (Long multiplication)
If a positional numeral system is used, a natural way of multiplying numbers is taught in schools as long multiplication, sometimes called grade-school multiplication, sometimes called Standard Algorithm: multiply the multiplicand by each digit of the multiplier and then add up all the properly shifted results. It requires memorization of the multiplication table for single digits.

This is the usual algorithm for multiplying larger numbers by hand in base 10. Computers initially used a very similar shift and add algorithm in base 2, but modern processors have optimized circuitry for fast multiplications using more efficient algorithms, at the price of a more complex hardware realization. A person doing long multiplication on paper will write down all the products and then add them together; an abacus-user will sum the products as soon as each one is computed.

**Example:** This example uses long multiplication to multiply 23,958,233 (multiplicand) by 5,830 (multiplier) and arrives at 139,676,498,390 for the result (product).
<pre>
        23958233
  ×         5830
  ———————————————
        00000000 ( =      23,958,233 ×     0)
       71874699  ( =      23,958,233 ×    30)
     191665864   ( =      23,958,233 ×   800)
  + 119791165    ( =      23,958,233 × 5,000)
  ———————————————
    139676498390 ( = 139,676,498,390        )
</pre>
###### Source [Wikipedia](https://en.wikipedia.org/wiki/Multiplication_algorithm)
 
### mult_lattice(Lattice multiplication)
Lattice multiplication, also known as the Italian method, Chinese method, Chinese lattice, gelosia multiplication, sieve multiplication, shabakh or Venetian squares, is a method of multiplication that uses a lattice to multiply two multi-digit numbers. It is mathematically identical to the more commonly used long multiplication algorithm, but it breaks the process into smaller steps, which some practitioners find easier to use.

**Example:** The picture below displaying the computation of 23,958,233 multiplied by 5,830 (multiplier); the result is 139,676,498,390. Notice 23,958,233 is along the top of the lattice and 5,830 is along the right side. The products fill the lattice and the sum of those products (on the diagonal) are along the left and bottom sides. Then those sums are totaled as shown.
<table>
<tbody><tr>
<td rowspan="2">
<pre>     2   3   9   5   8   2   3   3
   +---+---+---+---+---+---+---+---+-
   |1 /|1 /|4 /|2 /|4 /|1 /|1 /|1 /|
   | / | / | / | / | / | / | / | / | 5
 01|/ 0|/ 5|/ 5|/ 5|/ 0|/ 0|/ 5|/ 5|
   +---+---+---+---+---+---+---+---+-
   |1 /|2 /|7 /|4 /|6 /|1 /|2 /|2 /|
   | / | / | / | / | / | / | / | / | 8
 02|/ 6|/ 4|/ 2|/ 0|/ 4|/ 6|/ 4|/ 4|
   +---+---+---+---+---+---+---+---+-
   |0 /|0 /|2 /|1 /|2 /|0 /|0 /|0 /|
   | / | / | / | / | / | / | / | / | 3
 17|/ 6|/ 9|/ 7|/ 5|/ 4|/ 6|/ 9|/ 9|
   +---+---+---+---+---+---+---+---+-
   |0 /|0 /|0 /|0 /|0 /|0 /|0 /|0 /|
   | / | / | / | / | / | / | / | / | 0
 24|/ 0|/ 0|/ 0|/ 0|/ 0|/ 0|/ 0|/ 0|
   +---+---+---+---+---+---+---+---+-
     26  15  13  18  17  13  09  00</pre>
</td>
<td>
<pre> 01
 002
 0017
 00024
 000026
 0000015
 00000013
 000000018
 0000000017
 00000000013
 000000000009
 0000000000000
 —————————————
  139676498390
</pre>
</td></tr>
<tr>
<td>
<pre>= 139,676,498,390
</pre>
</td></tr></tbody></table>

###### Source [Wikipedia](https://en.wikipedia.org/wiki/Multiplication_algorithm)

#### Divition
Function named `divi(string left_operand, string right_operand, int range): string` does the divitional operation. Here `range` is used to define how many digits you want it to write after decimal point.
