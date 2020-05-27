const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = graphql;
const _ = require("lodash");
// dummy data
var books = [
  { name: "Harry Potter", genre: "fantasy", id: "1" },
  { name: "Harry Potter", genre: "fantasy", id: "2" },
  { name: "Harry Potter", genre: "fantasy", id: "3" },
  { name: "Harry Potter", genre: "fantasy", id: "4" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db/other source

        return _.find(books, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
