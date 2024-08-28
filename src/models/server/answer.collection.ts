import { IndexType, Permission } from "node-appwrite";
import { answerCollection, db } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
  // create collection
  await databases.createCollection(db, answerCollection, answerCollection, [
    Permission.create("users"),
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("Answer COllection is Created");

  //Creating Attributes
  await Promise.all([
    databases.createStringAttribute(
      db,
      answerCollection,
      "content",
      10000,
      true
    ),
    databases.createStringAttribute(
      db,
      answerCollection,
      "questionId",
      50,
      true
    ),
    databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
    databases.createStringAttribute(
      db,
      answerCollection,
      "tags",
      50,
      true,
      undefined,
      true
    ),
  ]);
  console.log("Question Attributes Created");
}
