"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { useState } from "react"

const ToolsPage = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="container w-full space-y-4">
            <h1 className="text-3xl font-bold">HERRAMIENTAS</h1>
            <div className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Botones normales</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant={"default"} size={"default"}>
                            Default
                        </Button>
                        <Button variant={"destructive"} size={"default"}>
                            Destructive
                        </Button>
                        <Button variant={"ghost"} size={"default"}>
                            Ghost
                        </Button>
                        <Button variant={"link"} size={"default"}>
                            Link
                        </Button>
                        <Button variant={"outline"} size={"default"}>
                            Outline
                        </Button>
                        <Button variant={"secondary"} size={"default"}>
                            Secondary
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Botones Grandes</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant={"default"} size={"lg"}>
                            Default
                        </Button>
                        <Button variant={"destructive"} size={"lg"}>
                            Destructive
                        </Button>
                        <Button variant={"ghost"} size={"lg"}>
                            Ghost
                        </Button>
                        <Button variant={"link"} size={"lg"}>
                            Link
                        </Button>
                        <Button variant={"outline"} size={"lg"}>
                            Outline
                        </Button>
                        <Button variant={"secondary"} size={"lg"}>
                            Secondary
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Botones pequeños</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant={"default"} size={"sm"}>
                            Default
                        </Button>
                        <Button variant={"destructive"} size={"sm"}>
                            Destructive
                        </Button>
                        <Button variant={"ghost"} size={"sm"}>
                            Ghost
                        </Button>
                        <Button variant={"link"} size={"sm"}>
                            Link
                        </Button>
                        <Button variant={"outline"} size={"sm"}>
                            Outline
                        </Button>
                        <Button variant={"secondary"} size={"sm"}>
                            Secondary
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Botones tamaño icono</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant={"default"} size={"icon"}>
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant={"destructive"} size={"icon"}>
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant={"ghost"} size={"icon"}>
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant={"link"} size={"icon"}>
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant={"outline"} size={"icon"}>
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant={"secondary"} size={"icon"}>
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Inputs</h2>
                <div className="space-y-2">
                    <Input placeholder="Input básico" />
                    <div className="relative">
                        <Input placeholder="Buscar..." icon={<Search className="h-4 w-4" />} />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Select</h2>
                <div className="space-y-2">
                    <Select>
                        <SelectTrigger className="w-48">
                            <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="opcion1">Opción 1</SelectItem>
                            <SelectItem value="opcion2">Opción 2</SelectItem>
                            <SelectItem value="opcion3">Opción 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Cards</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Título de la Card</CardTitle>
                        <CardDescription>Esta es una descripción de la card</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            Contenido de la Card
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati nisi fuga, magni culpa veniam autem
                            aspernatur molestias est accusamus voluptatem dolores quod! Quia perspiciatis nostrum recusandae similique
                            quo numquam.
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button variant={"default"}>Default</Button>
                            <Button variant={"destructive"}>Destructive</Button>
                            <Button variant={"ghost"}>Ghost</Button>
                            <Button variant={"link"}>Link</Button>
                            <Button variant={"outline"}>Outline</Button>
                            <Button variant={"secondary"}>Secondary</Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <span>Footer de la card</span>
                        <Button onClick={() => setOpen(!open)}>{open ? "Cerrar Modal" : "Abrir Modal"}</Button>
                    </CardFooter>
                </Card>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ToolsPage
