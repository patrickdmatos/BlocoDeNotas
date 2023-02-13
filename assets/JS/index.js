const btnMakeNote = document.getElementById('btnmakenote');
const divMainBody = document.getElementById('main-body');

btnMakeNote.onclick() = () => {
    var blocknote = document.createElement(div);
    blocknote.className = 'main-noteblock'
    blocknote.innerHTML =
        `
               <div class="main-noteblock">
                    <div class="ntblock-header">
                    <span>Titulo</span>
                    <div class="ntblock-icon" src="" alt="icon action">
                        <div id="modal-action-blocknote">
                            <dl>
                                <dd>
                                    <a href="#modal-note">
                                        EDITAR
                                    </a>
                                </dd>
                                <dd>
                                    <a>
                                        EXCLUIR
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <span>resumo das anotações</span>
            </div>
        `;
        document.body.appendChild(blocknote);
        console.log(blocknote);
}