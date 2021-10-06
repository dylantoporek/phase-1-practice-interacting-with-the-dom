
        let counter = document.getElementById('counter');
        let minus = document.getElementById('minus');
        let plus = document.getElementById('plus');
        let heart = document.getElementById('heart')
        let pause = document.getElementById('pause');
        let submit = document.getElementById('submit')
        
        //counter starts at 0, then counts by one indefinitely
        
        let count = 0;
        let interval = setInterval(iCount, [1500])
        function iCount(){
            counter.innerHTML = count++
        }
        
        //minus subtracts one from the number displayed in the counter
        
        minus.addEventListener('click', subtract)
        
        function subtract(){
            count--
            counter.innerHTML = count
        }
        
        
        //plus adds one to the number displayed in the counter
    
        plus.addEventListener('click', add)
    
        function add(){
            count++
            counter.innerHTML = count
        }
        
        //heart
    
        heart.addEventListener('click', like)
        
        function like(){
            let numberLiked = document.createElement('li')
            let likes = document.querySelector('.likes')
            numberLiked.innerHTML = `#${count} has been liked!`
            likes.appendChild(numberLiked)
        }
    
        document.addEventListener("DOMContentLoaded", () => {
           let form = document.querySelector("#comment-form")
            form.addEventListener('submit', (e) => {
                e.preventDefault
                let comment = document.querySelector("#comment-input")
                logSubmit(comment.value)
                
            })
            
        })
        
        
    
        function logSubmit(feedback) {
            let newComment = document.createElement('p')
            newComment.innerHTML = `${feedback}`
            document.querySelector("#list").appendChild(newComment)
        }

    
    


    

 