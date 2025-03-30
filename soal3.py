tamu = ["Ningguang", "Hutao", "Xiao", "Childe"]

status_kue_saat_xiao = True  

def periksa_kue(tamu):
    if tamu == "Ningguang":
        return "memeriksa kue"
    elif tamu == "Hutao":
        return "tidak memperhatikan kue"
    elif tamu == "Xiao":
        return "mengambil foto"
    elif tamu == "Childe":
        return "meletakkan air dan memberikan kado"

def siapa_mengambil_kue(tamu, status_kue_saat_xiao):
    for i in range(len(tamu)):
        kebiasaan = periksa_kue(tamu[i])

        if tamu[i] == "Xiao":
            if status_kue_saat_xiao:
                print("Kue masih utuh saat Xiao datang. Tamu setelah Xiao yang mungkin mengambil kue.")
        elif tamu[i] == "Childe":
            print("Childe kemungkinan besar yang mengambil kue karena dia datang setelah Xiao.")
            break

siapa_mengambil_kue(tamu, status_kue_saat_xiao)
