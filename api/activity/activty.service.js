const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const ObjectId = require("mongodb").ObjectId;

module.exports = { query, add, update, getLength };

async function query(filterBy) {
  try {
    const criteria = _buildCriteria(filterBy);

    const collection = await dbService.getCollection("activity");

    var activitys = await collection
      .find(criteria)
      .sort({
        createdAt: -1,
      })
      .toArray();
    return activitys;
  } catch (err) {
    logger.error("cannot find activities", err);
    throw err;
  }
}

async function add(activity) {
  try {
    const activityToAdd = {
      ...activity,
      createdAt: new Date().getTime(),
    };

    const collection = await dbService.getCollection("activity");
    await collection.insertOne(activityToAdd);
    return activityToAdd;
  } catch (err) {
    logger.error("cannot insert activitys", err);
    throw err;
  }
}

async function update(activity) {
  try {
    var id = ObjectId(activity._id);
    delete activity._id;
    const collection = await dbService.getCollection("activity");
    await collection.updateOne({ _id: id }, { $set: { ...activity } });
    const addedActivity = { ...activity, _id: id };
    return addedActivity;
  } catch (err) {
    logger.error(`cannot update activity ${activity._id}`, err);
    throw err;
  }
}

async function getLength() {
  try {
    const criteria = {};

    const collection = await dbService.getCollection("activity");

    var activities = await collection
      .find(criteria)
      .sort({ createdAt: -1 })
      .toArray();
    return activities.length;
  } catch (err) {
    logger.error("cannot find activities", err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = {};

  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, "i");
    criteria.$or = [
      { body: { $regex: regex } },
      { fullname: { $regex: regex } },
      { title: { $regex: regex } },
    ];
  }

  if (filterBy.userId) {
    criteria.$or = [{ createdTo: filterBy.userId }];
  }

  if (filterBy._id) {
    criteria._id = ObjectId(filterBy._id);
  }

  if (filterBy.position) {
    criteria.$and = [
      { "position.lat": { $exists: true } },
      { "position.lng": { $exists: true } },
    ];
  }

  if (filterBy.inStock) {
    criteria.inStock = { $eq: JSON.parse(filterBy.inStock) };
  }

  return criteria;
}
