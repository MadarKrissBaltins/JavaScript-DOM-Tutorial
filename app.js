// delete books

const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parent;
            li.parentNode.removeChild(li);

        }
    });

// add book-list
const addForm = document.forms['add-books'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);


// create elements
const li = documtent.createElement('li');
const bookName = document.createElement('span');
const bookBnt = document.createElement('span');

//add content
deleteBnt.textContent='delete';
bookName.textContent= value;


// appent to document
li.appendChild(bookName);
li.appendChild(deleteBnt);
list.appendChild();

});