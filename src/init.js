import env from 'src/../env'

if (location.host !== env.WEB_HOST)
{
  location.href = 'http://' + env.WEB_HOST
  throw new Error('')
}