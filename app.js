const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const RootQueryType = require('./graphqlTypes/root')

const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const { port } = require('./vars/appVars')
app.listen(port, () => console.log(`Server started at http://localhost:${port}`))