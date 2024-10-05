const inputElement = document.getElementById('input');
const inputbtn = document.getElementById('btn'); 
const count1 = document.getElementById('Count');
const name1 = document.getElementById('Name');
const age1 = document.getElementById('Age');

const fetchData = async (name) => {
    try {
        const response = await fetch('assets/data.json');
        const data = await response.json();
        
        const result = data.find(item => item.name.toLowerCase() === name.toLowerCase());

        count1.value = result ? result.count : 'N/A';
        name1.value = result ? result.name : 'N/A';
        age1.value = result ? result.age : 'N/A';
    } catch (error) {
        console.error('Error:', error);
        count1.value = 'Error';
        name1.value = 'Error';
        age1.value = 'Error';
    }
};

inputbtn.addEventListener('click', () => {
    const name = inputElement.value.trim();
    if (name) {
        fetchData(name);
    } else {
        alert("Please enter a name.");
    }
});
