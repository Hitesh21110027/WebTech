const { name, age, grade } = req.body;


try {
const newStudent = new Student({ name, age, grade }); await newStudent.save();
res.json(newStudent);
} catch (error) {
res.status(500).json({ error: error.message });
}
});


app.put('/students/:id', async (req, res) => { const { id } = req.params;
const { name, age, grade } = req.body;


try {
const updatedStudent = await Student.findByIdAndUpdate( id,
{ name, age, grade },
{ new: true } // Return the updated document
);


if (!updatedStudent) {
return res.status(404).json({ error: 'Student not found' });
}


res.json(updatedStudent);
} catch (error) {
res.status(500).json({ error: error.message });
}
});


app.delete('/students/:id', async (req, res) => { const { id } = req.params;

try {
const deletedStudent = await Student.findByIdAndDelete(id);


if (!deletedStudent) {
return res.status(404).json({ error: 'Student not found' });
 
 


