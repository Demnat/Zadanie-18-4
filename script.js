var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('img', {src: this.props.image})
        )
    },
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', { key: this.props.movie.id },
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MovieImage, { image: this.props.movie.image})
            )
        )
    },
});

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'https://via.placeholder.com/100x200',
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'https://via.placeholder.com/100x200',
    },
    {
        id: 3,
        title: 'Mała Stopa',
        desc: 'Film przedstawia legendę o Wielkiej Stopie z zupełnie innej perspektywy',
        image: 'https://via.placeholder.com/100x200',
    },
    {
        id: 4,
        title: 'Hotel Transylwania 3',
        desc: 'Paka Draka wybiera się na wakacje ekskluzywnym statkiem',
        image: 'https://via.placeholder.com/100x200',
    }
];

var moviesElements = movies.map(function (movie) { 
    
    return React.createElement(Movie, {key: movie.id, movie: movie});  // przypisujemy do zmiennej wynik funkcji
    
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));