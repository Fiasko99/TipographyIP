const { db } = require('../../../../orm')

module.exports = async (where, options = {}) => {
  const { 
    attributes = [
      'firstname',  
      'name',  
      'email',  
      'phone',  
      'createdAt',  
      'updatedAt', 
    ]
  } = options
  const query = {
    where,
    attributes,
  }
  const data = await db.users.findOne(query)

  return data && data.toJSON()
}