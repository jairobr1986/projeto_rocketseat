import os
import datetime

IGNORAR_PASTAS = {
    ".git", "__pycache__", ".venv", "venv",
    "node_modules", "dist", "build",
    ".idea", ".vscode"
}

IGNORAR_ARQUIVOS = {
    ".env", ".env.local", ".DS_Store", "Thumbs.db"
}

IGNORAR_EXTENSOES = {
    ".pyc", ".log", ".tmp", ".map"
}

def deve_ignorar(nome, caminho):
    if os.path.isdir(caminho) and nome in IGNORAR_PASTAS:
        return True
    if os.path.isfile(caminho):
        if nome in IGNORAR_ARQUIVOS:
            return True
        if any(nome.endswith(ext) for ext in IGNORAR_EXTENSOES):
            return True
    return False

def listar_estrutura(caminho, prefixo="", f=None):
    try:
        itens = sorted(os.listdir(caminho))
    except PermissionError:
        return

    itens = [
        item for item in itens
        if not deve_ignorar(item, os.path.join(caminho, item))
    ]

    for index, item in enumerate(itens):
        item_caminho = os.path.join(caminho, item)
        is_dir = os.path.isdir(item_caminho)
        connector = "├── " if index < len(itens) - 1 else "└── "

        linha = prefixo + connector + item
        if f:
            f.write(linha + "\n")
        else:
            print(linha)

        if is_dir:
            novo_prefixo = prefixo + ("│   " if index < len(itens) - 1 else "    ")
            listar_estrutura(item_caminho, novo_prefixo, f)

if __name__ == "__main__":
    # Nome da pasta raiz do projeto (automático)
    raiz_projeto = os.path.basename(os.path.abspath("."))

    data_atual = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    nome_arquivo = f"estrutura_{data_atual}.txt"

    with open(nome_arquivo, "w", encoding="utf-8") as f:
        f.write(f"{raiz_projeto}/\n")
        listar_estrutura(".", f=f)

    print(f"Estrutura do projeto salva em '{nome_arquivo}'")
