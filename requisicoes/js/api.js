const URL_BASE = "http://localhost:3000" //tecnica Don't repeat yo

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`)
            return await response.json()//fazer a conversao do formato json para js
        } catch {
            alert('erro ao buscar pensamentos')
            throw error
        }
    },
    
    async salvarPensamento(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
               method: "POST",
               headers: {
                "Content-Type" : "application/json"
               },
               body: JSON.stringify(pensamento)//converte de objeto para formato string json que a api entende
            })
            return await response.json()//fazer a conversao do formato json para js
        } catch {
            alert('erro ao salvar pensamentos')
            throw error
        }
    },
     async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`)//usar id na url para buscar especificamente
            return await response.json()//fazer a conversao do formato json para js
        } catch {
            alert('erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
               method: "PUT",
               headers: {
                "Content-Type" : "application/json"
               },
               body: JSON.stringify(pensamento)//converte de objeto para formato string json que a api entende
            })
            return await response.json()//fazer a conversao do formato json para js
        } catch {
            alert('erro ao editar pensamentos')
            throw error
        }
    },

    async excluirPensamento(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
               method: "DELETE"
            })
        } catch {
            alert('erro ao excluir pensamentos')
            throw error
        }
    },

}

export default api;//poder utilizar em outros projetos js