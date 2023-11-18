import axios from "axios";

export type ArticleAttributes = {
  title: string;
  content: string;
  date: string;
};

export type Article = {
  id: number;
  attributes: ArticleAttributes;
};

export const getArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/scrapy-blog-posts`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    return response.data.data.map((item: any) => ({
      id: item.id,
      attributes: item.attributes,
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
