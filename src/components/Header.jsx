import React from 'react'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg px-5 px-auto bg-primary py-2" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#"><i class="fa-solid fa-user me-2"></i>EMPLOYEE APP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
    </>
  )
}

export default Header