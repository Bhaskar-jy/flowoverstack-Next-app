import { Permission } from "appwrite";
import { commentCollection, db } from "../name";
import { databases } from "./config";

export default async function createCommentCollection() {
  // create collection
  await databases.createCollection(db, commentCollection, commentCollection, [
    Permission.create("users"),
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("Comment COllection is Created");

  //Creating Attributes
  await Promise.all([
    databases.createStringAttribute(
      db,
      commentCollection,
      "content",
      10000,
      true
    ),
    databases.createEnumAttribute(
      db,
      commentCollection,
      "type",
      ["answer", "question"],
      true
    ),
    databases.createStringAttribute(db, commentCollection, "typeId", 50, true),
    databases.createStringAttribute(
      db,
      commentCollection,
      "authorId",
      50,
      true
    ),
  ]);
  console.log("Comment Attributes Created");
}
