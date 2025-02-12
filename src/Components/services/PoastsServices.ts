import axios from "axios";

export class PostServices {
  private static URL: string = "https://dummyjson.com";

  public static async getAllPosts(data: string | number) {
    await axios.get(`${this.URL}/${data}`);
  }
}
