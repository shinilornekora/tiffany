import axios from 'axios'

const apis = {
    user: {
        list: () => axios.get<Record<string, string>>('http://localhost:8080/api/users'),
        active: () => axios.get<Record<string, string>>('http://localhost:8080/api/users/active'),
        inactive: () => axios.get<Record<string, string>>('http://localhost:8080/api/users/inactive'),
    },
    product: {
        list: () => axios.get<Record<string, string>>('http//localhost:8080/api/products'),
        licenseKeys: () => axios.get('http://localhost:8080/api/products/licenses'),
    },
    payments: {
        list: () => axios.get('http://localhost:8080/api/payments'),
    },
    forum: {
        messages: () => axios.get('http://localhost:8080/api/forum'),
    }
}

export default apis;
