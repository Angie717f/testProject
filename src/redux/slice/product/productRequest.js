import { createAsyncThunk } from '@reduxjs/toolkit'
import {RESTAURANTS_URL} from '../product/producUrl'

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch(RESTAURANTS_URL)  
      console.log(response);
      if(!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json()
      return data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
