import {Request} from 'express'

export function getRoute(req: Request ) {
    const route = req.route ? req.route.path : '' // check if the handler exist
    const baseUrl = req.baseUrl ? req.baseUrl : '' // adding the base url if the handler is a child of another handler
 
    return route ? `${baseUrl === '/' ? '' : baseUrl}${route}` : 'unknown route'
  }