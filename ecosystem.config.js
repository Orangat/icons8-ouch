module.exports = {
  apps: [{
    name: 'ouch',
    script: 'npm',
    args: 'run service',
    env: {
      NODE_ENV: 'dev',
      HOST: '0.0.0.0'
    },
    env_production: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0'
    }
  }]
}
