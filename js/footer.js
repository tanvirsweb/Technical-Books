document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <footer class="py-5 px-lg-5">
            <div class="container text-white">
                <div class="row gy-4 justify-content-between">
                    <div class="col-auto">
                        <p class="zoom-out-hover mb-0">
                            Designed by <a href="https://tanvirsweb.github.io/" class="fw-bold text-white">Tanvir Anjom Siddique</a>
                        </p>
                    </div>
                    <div class="col-auto">
                        <div class="social-icons d-flex gap-3">
                            <a class="zoom-out-hover text-white" href="mailto:tanvir.anjom.siddique@gmail.com"><i class="lar la-envelope"></i></a>
                            <a target="_blank" class="zoom-out-hover text-white" href="https://www.facebook.com/tanviranjomsiddique.alvi"><i class="lab la-facebook"></i></a>
                            <a target="_blank" class="zoom-out-hover text-white" href="https://www.linkedin.com/in/tanvir-anjom-siddique-50028a205"><i class="lab la-linkedin"></i></a>
                            <a target="_blank" class="zoom-out-hover text-white" href="https://www.coursera.org/user/68c3b690076eb7a16bc673208dfcaf34"><i class="lab la-dribbble"></i></a>
                            <a target="_blank" class="zoom-out-hover text-white" href="https://github.com/tanvirsweb/"><i class="lab la-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    document.getElementById("footer").innerHTML = footerHTML;
});
