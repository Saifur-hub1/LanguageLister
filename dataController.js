const LangName = require('./language')
let ar = [];

exports.createDataGetController = async (req, res, next)=>{
  try{
    let ling = await LangName.findOne();
    if(ling===null){
      ling = new LangName({
        langName: ar
      })
      ling.save();
    }
    ling = ling.langName;
    res.render('hello', {ling});
  }
  catch(e){
    console.log(e);
  }
}


exports.createDataPostController = async (req, res, next) => {
  const name = req.body.planguage;
  ar.push(name);

  try {
    let existDoc = await LangName.findOne();

    existDoc.langName = ar;
    console.log(existDoc.langName);

    await existDoc.save();

    res.redirect('/');
  } catch (e) {
    console.log(e);
    // Handle the error appropriately, e.g., send an error response
    res.status(500).send('Internal Server Error');
  }
};
