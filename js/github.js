class Github {
    constructor(){
        this.client_id = '4e94b7127e270febd585';
        this.client_secert = '5f537edbd3072f8c3c610e8ae8aef18e5b4e5dcd';
    }
    async getUser(user){
        const profileresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secert=${this.client_secert}`);
        
        const profile = await profileresponse.json();

        return {
            profile
        }
    
    }

}