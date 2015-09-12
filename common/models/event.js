module.exports = function(Event) {
  Event.status = function(cb) {
    cb(null, 'New');
  }

  Event.remoteMethod(
    'status',
    {
      http: { path: '/status', verb: 'get' },
      returns: { arg: 'status', type: 'string' }
    }
  )
};
