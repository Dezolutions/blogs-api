import { articlesQuery } from "../api/queries/articlesQuery.js";
import client from "../shopify.js";

export const getArticles = async (req, res, next) => {
  const articlesAmount = parseInt(req.query.articlesAmount);
  const cursor = req.query.cursor;
  try {
    const {data, errors, extensions} = await client.request(articlesQuery, {
      variables: {
        articlesAmount: articlesAmount || 8,
        cursor: cursor || null
      },
    });

    //error occurred while fetching from the API
    if(errors) {
      return res.status(errors.networkStatusCode).json(errors)
    }

    //success
    return res.status(200).json(data)

  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}