export const articlesQuery = `query getArticles($articlesAmount: Int!, $cursor: String) {
	articles(first: $articlesAmount, reverse: true, after: $cursor) {
  	edges {
      node {
        id
        title
        content(truncateAt: 200)
        onlineStoreUrl
        image {
          id
          url
          altText
        }
        publishedAt
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}`