var mongoose = require('mongoose')
    , Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/database");

var personSchema = Schema({
    name: String,
    age: Number
});

var storySchema = Schema({
    _creator: {type: Schema.Types.ObjectId, ref: 'Person'},
    title: String,
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);


var hasan = new Person({name: 'yesUmar', age: 24});

hasan.save(function (err, personSave) {
    console.log("hasan.save personSave function is ", personSave)
});

var story1 = new Story({title: 'umarStories', _creator: hasan._id});

story1.save(function (err, s) {

    console.log("story1.save(function is ", s);
}).then(function () {
    return Story
        .findOne({title: 'umarStories'})
        .populate('_creator')
        .exec(function (err, story) {
            if (err) return handleError(err);
            console.log('The creator is %s', story);
        });
});