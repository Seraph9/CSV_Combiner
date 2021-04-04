# SOME IMPORTANT NOTES BEFORE RUNNING MY CODE:

* Coding Challenge Instructions: Please read `INSTRUCTIONS.md` file.
* This is the coding assessment/test/challenge for the (remote) entry-level Junior Backend/Frontend Developer position with PMG: `https://www.pmg.com/`

* I used `Node.js` (JavaScript) to complete the coding assessment and pass the coding test.

* To run my code in terminal (which will combine all csv files into one csv file and output its contents with a new column in the terminal or `stdout`):

```
node combiner.js ./fixtures/accessories.csv ./fixtures/clothing.csv ./fixtures/household_cleaners.csv combined.csv
```
* To generate csv files (if non-existent) in the fixtures directory (confirm that `fixtures` directory/folder exists) run the command (in terminal):

```
python3 generatefixtures.py
```

**NOTA BENE:** All three csv files had an extra line at the end with no data; hence the necessary line of code to eliminate this:

```
if (array[array.length - 1] === '') {
        newArray.splice(newArray.length - 1, 1);
}
```
**MOREOVER:** The `clothing.csv` file has errors in it. Since it is a csv file and not a JS or JavaScript file; thus there is no need to insert the escape character `\` or backslash to escape inner quotes. Github was not displaying it as tabular data (which is a main purpose of a CSV file) because of this error. I corrected these for my repo here. E.g. from `"\"Gingham\" Shorts"` to `"Gingham Shorts"`.