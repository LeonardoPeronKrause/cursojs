// Se uma função faz parte de um objeto, chamamos ela de metodo
 
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
