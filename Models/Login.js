class LoginModel {
    loginConst(){
        this.token = null;
    }
    async login (User, pass){

        const response = await fetch('/api/login',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                User,
                pass
            })
        });
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message);
        }
        this.token = data.token;
        return true;
      } catch (error) {
        throw error;
    }
    async logout(){
        this.token = null;
    }
    isAuthenticated(){
        return !!this.token;
    }

}