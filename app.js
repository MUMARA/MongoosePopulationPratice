var mongoose = require('mongoose')
    , Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/yes");

var personSchema = Schema({
    id: Number,
    name: String
});

var storySchema = Schema({
    creator: String, stories: [{type: Number, ref: 'Story'}]
})


var Person = mongoose.model('Person', personSchema);
var Story = mongoose.model('Story', storySchema);


var aaron = new Person({id: 5555555555, name: 'fahadRana'});
var storyVariable = new Story({creator: 'umrfad'});

aaron.save(function (err) {
    if (err) {
        return handleError(err);
    }
    else {
        console.log("person aaron.save console.log is ", aaron.id, aaron.name);
    }
});

storyVariable.save(function (err) {
    if (err) {
        return handleError(err);
    }
    else {
        console.log(storyVariable.creator, storyVariable.id);
    }
});


Person.findOne({id: 5555555555, name: 'fahadRana'})
console.log('The person id & name is %s', aaron.id, aaron.name);

Story.findOne({creator: 'umrfad'})
console.log('The creator is %s', storyVariable.creator, storyVariable.id);