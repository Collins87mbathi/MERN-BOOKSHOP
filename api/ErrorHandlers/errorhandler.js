const errorhandler = (req,res,next ) => {
    
    res.status(500).json({ msg : 'something is wrong '}) 
  
 }
 
 module.exports = errorhandler;