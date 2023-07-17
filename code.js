function getUniqueLetter(arrWords) {
    let arrUniqueLetters = [];
  
    arrWords.forEach(function(word) {
      if (word !== "" && word !== " ") {
        let i = 0;
        let work = true;
        while (work) {
          if (word.lastIndexOf(word.charAt(i)) == 0) {
            arrUniqueLetters.push(word.charAt(i));
            work = false;
          } else if (word.length > i) {
            i++;
          } else if (word.length == i) {
            work = false;
          }
        }
      }
    });
  
 
    
    console.log(arrUniqueLetters);
let unique = arrUniqueLetters.find((element) => arrUniqueLetters.filter((el) => el === element).length === 1);
      alert(unique);
  }
  
 // let word =     'The Tao gave birth to machine language.  Machine language gave birth to the assembler. The  assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.-- Geoffrey James, "The Tao of Programming"';
  
 function  getUniqueText(){

  let word =  document.getElementById('text').value 

  word = word.replace(/[^a-zA-Z\s]/g, "");
  
  let arrWords = word.split(' ').map(word => word);
  getUniqueLetter(arrWords);

}