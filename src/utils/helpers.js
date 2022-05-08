import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL
})

// 每此請求都在config的headers帶入token (如果有token的情況下)
axiosInstance.interceptors.request.use(
  config =>{
    //從localStorage取出token
    const token = localStorage.getItem('token')
    // 如果 token 存在的話，則帶到config物件中的headers當中
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }, error => {
    Promise.reject(error)
  })

export const apiHelper = axiosInstance

// copy from SweetAlert2
export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
