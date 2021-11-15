import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';

class ApiController {

  public async last(req: Request, res: Response): Promise<void> {
    const url: string = 'http://indecon.site/last';
    try {
      const getLastResults: AxiosResponse = await axios.get(url);
      res.status(200).json({
        message: getLastResults.data
      });
    }
    catch (error) {
      process.stderr.write(`ERROR received from ${url}: ${error}\n`);
      res.status(500).json({
        message: `ERROR received from api`
      });
    }
  }

  public async getValuesFromOne(req: Request, res: Response): Promise<any> {
    const url: string = 'http://indecon.site/values/';
    const { id } = req.params;
    try {
      const getLastResults: AxiosResponse = await axios.get(url + id);
      res.status(200).json({
        message: getLastResults.data
      });
    } catch (error) {
      process.stderr.write(`ERROR received from ${url}: ${error}\n`);
      res.status(500).json({
        message: `ERROR received from api`
      });
    }
  }

  public async getValuesFromDate(req: Request, res: Response): Promise<any> {
    const url: string = 'http://indecon.site/date/';
    const { name, date } = req.params;
    try {
      const getLastResults: AxiosResponse = await axios.get(url + name + '/' + date);
      res.status(200).json({
        message: getLastResults.data
      });
    } catch (error) {
      process.stderr.write(`ERROR received from ${url}: ${error}\n`);
      res.status(500).json({
        message: `ERROR received from api`
      });
    }
  }
}

const apiController = new ApiController;
export default apiController;