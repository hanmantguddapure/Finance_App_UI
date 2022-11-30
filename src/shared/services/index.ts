import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";
import { CacheService } from "./cache.service";
import { GenratePDFService } from "./pdf-genrate.service";
import { ToastService } from "./toast.service";
import { JwtAuthService } from "./token-intercepter.service";


export const ServiceComponents = [
    ApiService,
    AuthService,
    CacheService,
    GenratePDFService,
    ToastService,
    JwtAuthService
]